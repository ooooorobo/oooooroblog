import fs from "fs";
import path from "path";
import { PostListElement, PostMeta } from "@src/model/post";

export default class PostUtil {
  private static _INSTANCE: PostUtil;

  private postMetaMap: Map<string, PostListElement> = new Map<
    string,
    PostListElement
  >();

  private constructor() {
    //
  }

  static get instance() {
    return this._INSTANCE ?? new PostUtil();
  }

  private parsePostIndex(name: string): number {
    return Number(name.slice(0, name.indexOf("-")));
  }

  private getAllPostNames(reverse?: boolean) {
    const postPath = path.join(process.cwd(), "src", "pages", "posts");

    return fs
      .readdirSync(postPath)
      .sort(
        (a, b) =>
          (this.parsePostIndex(a) - this.parsePostIndex(b)) * (reverse ? -1 : 1)
      );
  }

  private async getPostMeta(slug: string) {
    if (this.postMetaMap.has(slug)) {
      return this.postMetaMap.get(slug);
    }
    const m = await import(`@src/pages/posts/${encodeURIComponent(slug)}`);
    const postListElement: PostListElement = {
      slug: slug.replace(".mdx", ""),
      meta:
        { ...(m.meta as PostMeta), index: this.parsePostIndex(slug) } ?? null,
    } as PostListElement;
    this.postMetaMap.set(slug, postListElement);
    return postListElement;
  }

  private async getAllPostMeta(): Promise<PostListElement[]> {
    const dirFiles = this.getAllPostNames(true);
    return this.getPostMetaList(dirFiles);
  }

  private async getPostMetaList(names: string[]): Promise<PostListElement[]> {
    const result = await Promise.all(
      names.map(async (name) => this.getPostMeta(name))
    );
    return result.filter((x) => x !== undefined) as PostListElement[];
  }

  public async getPosts(
    page: number,
    count: number
  ): Promise<PostListElement[]> {
    const [start, end] = [page * count, (page + 1) * count];
    const dirFiles = this.getAllPostNames(true).slice(start, end);
    return this.getPostMetaList(dirFiles);
  }

  public async getPostsByTag(
    page: number,
    count: number,
    tag: string
  ): Promise<PostListElement[]> {
    const [start, end] = [page * count, (page + 1) * count];
    return (await this.getAllPostMeta())
      .filter((p) => p.meta.tags.includes(tag))
      .slice(start, end);
  }

  public async getSidePosts(index: number): Promise<SidePosts> {
    const postNames = this.getAllPostNames();
    const found: number = postNames.findIndex(
      (post) => this.parsePostIndex(post) === index
    );
    return {
      prev:
        found > 0 ? await this.getPostMeta(postNames[found - 1]) : undefined,
      next:
        found < postNames.length - 1
          ? await this.getPostMeta(postNames[found + 1])
          : undefined,
    };
  }

  public async getAllTags(): Promise<string[]> {
    const allPosts = await this.getAllPostMeta();
    const allTags: Set<string> = new Set<string>();
    allPosts.forEach((post) =>
      post.meta.tags.forEach((tag) => allTags.add(tag))
    );
    return Array.from(allTags);
  }

  public static createPostMeta(meta: Partial<PostMeta>): PostMeta {
    return {
      index: 0,
      title: "",
      description: "",
      category: "",
      series: "",
      tags: [],
      keywords: [],
      postedAt: "",
      ...meta,
    };
  }
}

export interface SidePosts {
  prev?: PostListElement;
  next?: PostListElement;
}
