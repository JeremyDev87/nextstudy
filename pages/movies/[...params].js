import axios from "axios";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
    const router = useRouter();
    const [title, id, runtime] = params || [];
    return (
        <div>
            <Seo title={title} />
            <h4>{title || "Loading..."}</h4>
            <h4>runtime : {runtime}</h4>
        </div>
    )
}
export async function getServerSideProps({ params: { params } }) {
    const getDetailData = await (await axios(`http://localhost:3000/api/movies/${params[1]}`)).data;
    console.log(getDetailData.runtime);
    params.push(getDetailData.runtime)
    console.log(params)
    return {
        props: {
            params,
        }
    }
}