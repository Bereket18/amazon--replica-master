import GradeIcon from "@mui/icons-material/Grade";

const ProductRatings = (props) => {
	const starNumber = props.avgRating;
	const ratingNumber = props.ratings;

	return (
		<div className="flex">
			{Array.from({ length: starNumber }, (_, i) => (
				<GradeIcon
					style={{
						color: "yellow",
					}}
					key={i}
					className="stroke-[#F1B61F] fill-[#F1B61F] h-[20px]"
				/>
			))}
			{Array.from({ length: 5 - starNumber }, (_, i) => (
				<GradeIcon key={i} className="stroke-[#F1B61F] h-[20px]" />
			))}
			<span className="ml-3 text-black-500">{ratingNumber} ratings</span>
		</div>
	);
};

export default ProductRatings;
