const additionalInfo = [
  {
    label: "Specialty",
    value: "Vegetarian",
  },
  {
    label: "Ingredient Type",
    value: "Vegetarian",
  },
  {
    label: "Brand",
    value: "Lavian Exotique",
  },
  {
    label: "Form",
    value: "Bar Brownie",
  },
  {
    label: "Package Information",
    value: "Box",
  },
  {
    label: "Manufacturer",
    value: "Prayagh Nutri Product Pvt Ltd",
  },
  {
    label: "Item Part Number",
    value: "LE 014 - 20pcs Crème Bakes (Pack of 2)",
  },
  {
    label: "Net Quantity",
    value: "40.00 count",
  },
];
const AdditionalInfoTab = () => {
  return (
    <div>
      <table className="min-w-full border-collapse border border-gray-300">
        <tbody>
          {additionalInfo.map((item) => (
            <tr key={item.label}>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                {item.label}
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdditionalInfoTab;
