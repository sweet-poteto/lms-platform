import { IconBadge } from "@/components/icon-badge";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  numberOfItems: number;
  variant?: "default" | "success";
  label: string;
  icon: LucideIcon;
}

export const InfoCard = ({
  numberOfItems,
  variant,
  label,
  icon: Icon,
}: InfoCardProps) => {
  return (
    <div className="flex items-center p-3 border rounded-md gap-x-2">
      <IconBadge variant={variant} icon={Icon} />
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">
          {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  );
};
