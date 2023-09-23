import { transactionsTypeColumns } from "@/modules/user";
import { getAllTypes } from "@/services";
import { LoadingSpinner } from "@/shared/icons";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "@/components";

export function TableType() {
  const { data, isLoading } = useQuery({
    queryKey: ["list-type"],
    queryFn: getAllTypes,
  });

  if (isLoading)
    return (
      <>
        <LoadingSpinner />
      </>
    );

  return <DataTable columns={transactionsTypeColumns} data={data} />;
}
