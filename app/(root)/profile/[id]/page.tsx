import { fetchOperatorByName } from "@/lib/actions/actions";
import { ProfilePageProps } from "@/types";
import ProfileInfoCard from "@/components/shared/ProfileInfoCard";
import ProfileCard from "@/components/shared/ProfileCard";

const ProfilePage = async ({ params }: ProfilePageProps) => {
	const { id } = params;
	const data = await fetchOperatorByName(id);

	return (
		<>
			<div className="text-center flex px-4 sm:px-16 py-8 flex-col bg-gradient-to-t from-amber-50 to-cyan-50 gap-3">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20">
					<div className="bg-gradient-to-t from-cyan-100 to-yellow-100 rounded-md py-2 h-auto">
						<h2 className="text-black text-2xl">Operator {data.name}</h2>
						<ProfileCard data={data} />
					</div>
					<ProfileInfoCard data={data} />
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
