import { fetchOperatorByName } from "@/lib/actions/actions";
import { Badge } from "@/components/ui/badge";
import { ProfilePageProps } from "@/types";
import Image from "next/image";
import ProfileInfoCard from "@/components/shared/ProfileInfoCard";

const ProfilePage = async ({ params }: ProfilePageProps) => {
	const { id } = params;
	const data = await fetchOperatorByName(id);

	return (
		<>
			<div className="text-center flex px-12 py-8 flex-col bg-gradient-to-t from-amber-50 to-cyan-50 h-[100vh] gap-3">
				<div className="grid lg:grid-cols-2 sm:grid-rows-1 gap-20 max-sm:grid-rows-2">
					<div className="bg-gradient-to-t from-cyan-100  to-yellow-100 rounded-md py-2">
						<h2 className="text-black text-2xl">Operator {data.name}</h2>
						<Image
							src={
								data.art && data.art[0]
									? data.art[0].link
									: "/assets/mostima.png"
							}
							alt="Operator Profile Picture"
							className="object-cover py-2"
							width={500}
							height={500}
							priority
						/>
					</div>
					<ProfileInfoCard data={data} />
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
