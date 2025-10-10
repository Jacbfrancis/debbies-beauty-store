function ProductCategory() {
  const productCategoriesArray = [
    "LIPGLOSS",
    "LASHES",
    "FACEWASH",
    "BODY LOTION",
    "LIPSTICK",
    "WIGS",
    "EYE PENCIL",
    "NAILS",
    "MOISTURIZERS",
  ];

  return (
    <>
      {productCategoriesArray.map((productCategory, index) => (
        <h2
          key={index}
          className="text-[#e94a6d] text-[1.9rem] font-medium py-8"
        >
          {productCategory}
        </h2>
      ))}
    </>
  );
}

export default ProductCategory;
