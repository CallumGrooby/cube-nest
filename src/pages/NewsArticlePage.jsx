import { useParams } from "react-router-dom";
import { NewsData } from "../data/NewsData";
import { ImageCarousel } from "../components/ImageCarousel";

function NewsArticlePage() {
  const { id } = useParams();

  const articleData = NewsData.find((element) => element.id == id);

  return (
    <article className="font-mavenPro text-primary flex flex-col gap-2 ">
      <div className=" w-full h-[900px]">
        <img
          className="w-full h-full object-cover"
          src={articleData.image}
          alt={""}
        />
      </div>
      <div className="container mx-auto my-8">
        <h1 className="text-secondary text-center text-5xl uppercase font-bold">
          {articleData.title}
        </h1>
        <h2 className="text-lg w-fit">{articleData.date}</h2>

        <div className="flex flex-col gap-4">
          {articleData.text.map((text, index) => {
            return (
              <p className="text-2xl" key={index}>
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default NewsArticlePage;
