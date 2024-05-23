import { Card } from "~/components/ui/card";
import ToolTipWrapper from "~/components/ToolTipWrapper";

interface SideBarWidgetItemProps {
  width: number;
  height: number;
  name: string;
  description: string;
}

export default function SideBarWidgetItem({
  description,
  height,
  width,
  name,
}: SideBarWidgetItemProps) {
  return (
    <ToolTipWrapper description={description}>
      <Card
        className="w-full cursor-pointer hover:bg-muted transition-all duration-300 min-w-28 max-w-40 rounded-lg aspect-square"
        draggable
      >
        <header className="pt-3 text-xs font-bold items-center justify-center flex">
          {name}
        </header>
        <div className="h-full flex items-center text-lg text-muted-foreground justify-center">
          {width} * {height}
        </div>
        <footer className="text-xs flex flex-row items-center justify-center px-2 pb-3 text-muted-foreground">
          hover me
        </footer>
      </Card>
    </ToolTipWrapper>
  );
}