import Head from "next/head";
import {PostMeta} from "../model/post";

const Meta = ({title, description, tags}: PostMeta) => {
    return <Head>
        <title>{title}</title>
        <meta name={'keywords'} content={tags.join(', ')} />
        <meta name={'description'} content={description} />
    </Head>;
}

export default Meta;
