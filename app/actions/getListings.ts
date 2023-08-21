import primsa from "@/app/libs/prismadb";

const getListings = async () => {
  try {
    const listings = await primsa.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
};
export default getListings;
