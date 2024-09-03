import ArticleReverse from './Articles/ArticleReverse';
import ArticleRow from './Articles/ArticleRow';

export default function DescriptionSection() {
  return (
    <section className="text-primaryText flex flex-col gap-3">
      <div className="text-sm md:text-lg">
        <ArticleRow />
        <ArticleReverse />
      </div>
    </section>
  );
}
