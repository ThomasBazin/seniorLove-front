import ArticleReverse from './Articles/ArticleReverse';
import ArticleRow from './Articles/ArticleRow';

interface DescriptionSectionProps {
  isFirstFormValidated: boolean;
  isSecondFormValidated: boolean;
}

export default function DescriptionSection({
  isFirstFormValidated,
  isSecondFormValidated,
}: DescriptionSectionProps) {
  return (
    <section className="text-primaryText flex flex-col gap-3">
      <div className="text-sm md:text-lg">
        <ArticleRow
          isFirstFormValidated={isFirstFormValidated}
          isSecondFormValidated={isSecondFormValidated}
        />
        <ArticleReverse
          isFirstFormValidated={isFirstFormValidated}
          isSecondFormValidated={isSecondFormValidated}
        />
      </div>
    </section>
  );
}
