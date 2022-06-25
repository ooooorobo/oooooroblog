import Head from "next/head";
import {PostMeta} from "../../model/post";

const Meta = ({title, description, tags}: PostMeta) => {
    const browserTitle = `${title} - oooooroblog`
    return <Head>
        <title key={'post'}>{browserTitle}</title>
        <meta key={'post'} name={'keywords'} content={tags.join(', ')} />
        <meta key={'post'} name={'description'} content={description} />
    </Head>;
}

export default Meta;
