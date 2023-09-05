import ProductBadge from "./ProductBadge";
// import ProductRatings from "./ProductRatings";

function truncate(str, n) {
	return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

const ProductDetails = ({ product, ratings }) => {
	return (
		<div className="mb-1">
			<div className="text-xl xl:text-2xl font-medium mb-1 text-black-500">
				{truncate(product?.title, 80)}
			</div>
			<div className="text-sm xl:text-base mb-1">
				by <span className="text-blue-500">{product.brand}</span>
			</div>
			<div className="text-xs xl:text-sm font-bold mb-1">
				{product.attribute}
			</div>
			<div>
				<ProductBadge badge={product.badge} />
			</div>
		</div>
	);
};

export default ProductDetails;
