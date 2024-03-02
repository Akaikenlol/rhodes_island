import { fetchOperatorByName } from "@/lib/actions/actions";
import { ProfilePageProps } from "@/types";
import Image from "next/image";

const ProfilePage = async ({ params }: ProfilePageProps) => {
	const { id } = params;
	const data = await fetchOperatorByName(id);

	return (
		<div className="text-center flex-center flex-col bg-gradient-to-t from-amber-50 to-cyan-50 h-[100vh]">
			<h1 className="text-black text-2xl">{data.name}</h1>
			<div className="flex justify-center items-center flex-col gap-2 mt-2 w-[500px] h-[650px] bg-gradient-to-t from-cyan-100  to-yellow-100 rounded-md">
				<Image
					src={
						data.art && data.art[0] ? data.art[0].link : "/assets/mostima.png"
					}
					alt="Operator Profile Picture"
					className="object-cover"
					width={500}
					height={500}
					priority
				/>
				<div className="flex flex-col text-center justify-center items-center gap-2 rounded-md">
					<h2 className="text-black font-semibold">
						Operator Name: {data.name}
					</h2>
					<p className="text-black font-semibold">Rarity: {data.rarity}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
