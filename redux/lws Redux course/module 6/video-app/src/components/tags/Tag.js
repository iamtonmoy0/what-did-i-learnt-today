import { useDispatch, useSelector } from "react-redux";
import { removeTag, tagSelected } from "../../features/filter/filterSlice";

export default function Tag({ tag }) {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);
  const isSelected = selectedTags.includes(tag.title) ? true : false;
  // handle selected
  const handleSelect = () => {
    if (isSelected) {
      dispatch(removeTag(tag.title));
    } else {
      dispatch(tagSelected(tag.title));
    }
  };
  // style
  const style = isSelected
    ? "bg-blue-600 text-black-600 px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  return (
    <div onClick={handleSelect} className={style}>
      {tag.title}
    </div>
  );
}

{
  /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
redux
</div> */
}
