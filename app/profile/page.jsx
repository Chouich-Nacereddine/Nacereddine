import TopLeftProfile from "./components/TopLeftProfile";
import TopRightProfile from "./components/TopRightProfile";

const Profile = () => {
  return (
    <div className="min-h-screen px-14 pt-20">
      <div className="flex justify-center gap-2 h-">
        <TopLeftProfile />
        <TopRightProfile />
      </div>
    </div>
  );
};

export default Profile;
