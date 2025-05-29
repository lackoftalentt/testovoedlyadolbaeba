import { cn } from "@/shared/lib/twMerge";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect, type ComponentProps } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { propertiesList } from "../model/propertiesList";
import { usePersonDetails } from "../lib/usePersonDetails";
import { useModalStore } from "../model/modalStore";

export const PersonModal = ({ className, ...props }: CardProps) => {
  const navigate = useNavigate();
  const { personUrl } = useModalStore();

  const { data, isLoading, isError } = usePersonDetails(personUrl);

  const handleCloseModal = () => {
    navigate(-1);
  };

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (isError) return null;

  return (
    <div
      onClick={() => handleCloseModal()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <Card
        onClick={stopPropagation}
        className={cn("w-[380px]", className)}
        {...props}
      >
        <CardHeader>
          <CardTitle>
            {isLoading ? (
              <Skeleton
                className="w-full h-full"
                baseColor="#DEDEDE"
                highlightColor="#999999"
              />
            ) : (
              data?.properties.name
            )}
          </CardTitle>
          <CardDescription>Информация о персонаже из Star Wars</CardDescription>
        </CardHeader>

        <CardContent className="grid gap-2 text-sm text-muted-foreground">
          <SkeletonTheme baseColor="#DEDEDE" highlightColor="#999999">
            {propertiesList.map((property) => (
              <div className="flex justify-between">
                <span className="font-medium text-black">
                  {property.label}:
                </span>
                {isLoading ? (
                  <Skeleton className="h-full" style={{ width: 200 }} />
                ) : (
                  <span>
                    {data?.properties[property.key]} {property.unit}
                  </span>
                )}
              </div>
            ))}
          </SkeletonTheme>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button onClick={handleCloseModal} className="cursor-pointer">
            {isLoading ? "Загрузка..." : "Закрыть"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

type CardProps = ComponentProps<typeof Card>;
