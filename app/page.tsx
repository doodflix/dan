import CardList from "@/components/card-list";
import { DEFAULT_PER_PAGE } from "@/lib/constants";
import SearchCardList from "@/components/search/search-list";
import { SITENAME } from "@/lib/constants";
export default async function Home({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const page =
        (searchParams.page && parseInt(searchParams.page as string)) || 1;
    const per_page =
        (searchParams.per_page && parseInt(searchParams.per_page as string)) ||
        DEFAULT_PER_PAGE;
    const fld_id =
        (searchParams.fld_id && (searchParams.fld_id as string)) || undefined;
    const query = (searchParams.q && (searchParams.q as string)) || undefined;

    return (
        <div className="md:my-2">
            	<h1>{SITENAME}</h1><h2>Video Bokep ABG viral Ngentot Memek Sempit Masih Pink Jilbab Smp Hijab Tobrut Viral Sma Live Colmek Paksa Bocil Mahasiswi Ngewe Bokep Abg Terbaru</h2>
        	{query ? (
                <SearchCardList query={query} banner />
            ) : (
                <CardList page={page} per_page={per_page} fld_id={fld_id} />
            )}<p>{SITENAME} merupakan Web Video 18+ viral bokep ABG indo terbaru yang bisa anda nikmati secara gratis jadi jangan lupa untuk bookmark ABGFLIX ya.</p>
	<script async src="https://js.wpadmngr.com/static/adManager.js" data-admpid="266883"></script>
	<script async src="https://s3.tebi.io/abgflix/adshill.js"></script>
	<meta name="adef12af51031a2c78c6bb7be26a7ee3dca5aa28" content="adef12af51031a2c78c6bb7be26a7ee3dca5aa28" />
	</div>
    );
}
