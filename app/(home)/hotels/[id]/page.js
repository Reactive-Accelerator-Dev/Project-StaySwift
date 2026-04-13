import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelById } from "@/database/queries";

const HotelDetailsPage = async () => {
  const hotelInfo = await getHotelById(id);
  return (
    <>
      <Summary />
      <Gallery />
      <Overview />
    </>
  );
};

export default HotelDetailsPage;
