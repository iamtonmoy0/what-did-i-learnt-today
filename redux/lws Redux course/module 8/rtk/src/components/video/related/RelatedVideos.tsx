import { useGetRelatedVideosQuery } from "../../../features/api/apiSlice";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideos({ title }) {
  console.log(title);
  const {
    data: relatedVideos,
    isLoading,
    isError,
  } = useGetRelatedVideosQuery(title);

  let content = null;
  if (isLoading) {
    content = <p>Loading</p>;
  } else if (!isLoading && isError) {
    content = <p>error loading the content</p>;
  } else {
    content = relatedVideos?.map((video) => (
      <RelatedVideo key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
