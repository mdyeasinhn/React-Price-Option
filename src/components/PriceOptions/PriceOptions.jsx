import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: "$30",
      features: [
        "Access to cardio equipment",
        "Limited group classes",
        "Locker room access",
        "Discounts on personal training sessions",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: "$50",
      features: [
        "Access to cardio and strength equipment",
        "Full range of group classes",
        "Locker and shower facilities",
        "Nutrition advice from certified trainers",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: "$80",
      features: [
        "Access to all equipment and facilities",
        "Personal training sessions",
        "Nutrition consultation",
        "Access to premium gym events and workshops",
      ],
    },
  ];
  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Pirces in the town </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption option={option} key={option.id}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
