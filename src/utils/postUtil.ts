import { PostMeta } from "@src/model/post";

export default class PostUtil {
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
