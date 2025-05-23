export type CardData = {
  cardHeader: string;
  cardSubHeader: string;
  cardContent: string;
};
type GridCardProps = {
  cards: CardData[];
};
export const GridCard = ({ cards }: GridCardProps) => {
  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1  gap-3.5 px-36 max-sm:px-10">
      {cards.map((card, index) => {
        return (
          <div
            key={index}
            className="rounded-lg border-1 border-[#e1e8f0] bg-card text-card-foreground shadow-sm text-left max-sm:text-center"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="mb-2 w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-6 w-6 text-indigo-600"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {card.cardHeader}
              </h3>
              <p className="text-sm text-muted-foreground">
                {card.cardSubHeader}
              </p>
            </div>
            <div className="p-6 pt-0">
              <p className="text-slate-600">{card.cardContent}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
