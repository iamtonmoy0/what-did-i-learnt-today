import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/api/apiSlice";
import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";

export default function Video() {
  const { id } = useParams();
  const { data: video, isLoading, isError } = useGetVideoQuery(id);
  let content = null;
  if (isLoading) {
    content = <div>loading</div>;
  }
  if (!isLoading && isError) {
    content = <div>error</div>;
  }
  if (!isLoading && !isError && video) {
    content = (
      <>
        <Player link={video.link} />
        <Description video={video} />
      </>
    );
  }
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}
          </div>
          <RelatedVideos title={video?.title} />
        </div>
      </div>
    </section>
  );
}
