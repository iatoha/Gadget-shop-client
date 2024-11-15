import Review from "./Review";

const UserReview = () => {
    return (
        <div className="lg:flex items-center justify-between gap-7">
            <Review/>
            <Review/>
            <Review/>
            <Review/>
        </div>
    );
};

export default UserReview;