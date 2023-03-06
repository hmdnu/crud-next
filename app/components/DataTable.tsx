import { Button, Empty } from "@/app/components/utils";
export default function Data({ datas, deleteData }: any) {
  return (
    <div>
      {datas.length === 0 ? (
        <Empty />
      ) : (
        <table className="table-fixed w-full border-collapse">
          <thead>
            <tr className="text-left">
              <th className="border-b p-3">Item</th>
              <th className="border-b p-3">Price</th>
              <th className="border-b p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data: any, index: any) => (
              <tr key={index}>
                <td className={`p-3 ${index === datas.length - 1 ? "border-none" : "border-b"}`}>{data.item}</td>
                <td className={`p-3 ${index === datas.length - 1 ? "border-none" : "border-b"}`}>Rp.{data.price}</td>
                <td className={`p-3 ${index === datas.length - 1 ? "border-none" : "border-b"}`}>
                  <Button id={data.id} deleteData={deleteData} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
