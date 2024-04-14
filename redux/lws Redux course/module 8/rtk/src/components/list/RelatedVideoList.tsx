import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/loading";

export default function RelatedVideoList({ currentVideoId, tags }) {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  // content
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <p>{error}</p>;
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideoListItem key={video.id} video={video} />
    ));
  } else {
    content = null;
  }

  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
