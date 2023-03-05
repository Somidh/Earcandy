import BookCard from "./BookCard";

type Props = {
  myPosts: any;
};

export default function BookContainer({ myPosts }: Props) {
  return (
    <div className="flex flex-wrap gap-5">
      {myPosts?.map((post: any, i: number) => (
        <BookCard post={post} key={i} />
      ))}
    </div>
  );
}
