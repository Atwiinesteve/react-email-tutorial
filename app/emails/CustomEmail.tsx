import React from "react";
import {
	Body,
	CodeInline,
	Column,
	Container,
	Font,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ICustomMailTemplateProps {
	title: string;
	content: string;
	link: string;
	username: string;
	image: string;
}

export default function CustomEMailTemplate({
	title = "Brighten your home for less!",
	content = "Spring is in full swing, and what better way to celebrate the season of new beginnings than with fresh flowers? Our beautiful collection of blooms is now available at discounted prices that you don't want to miss!",
	link = "#",
	image = "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
	username = "Atwiine Stephen",
}: ICustomMailTemplateProps) {
	return (
		<Html>
			<Head />
			<Font
				fontFamily="Karla"
				fallbackFontFamily="Verdana"
				webFont={{
					url: "https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
					format: "woff2",
				}}
				fontWeight={400}
				fontStyle="normal"
			/>
			<Preview>{title}</Preview>
			<Tailwind
				config={{
					theme: {
						extend: {
							colors: {
								primary: "#D13928",
								accent: "#66634B",
							},
						},
					},
				}}>
				<Body className="bg-white m-auto text-black">
					<Container
						style={{
							border: "1.5px solid #eaeaea",
						}}
						className="w-[390px] my-[40px] mx-auto">
						<Link
							href={link}
							className="block text-2xl py-2 px-0 font-bold text-accent text-center">
							Petal Palace
						</Link>
						<Section className="relative w-full inline-block">
							<Img src={image} className="h-auto w-auto" />
							<Link
								href="#"
								className="py-3 px-5 rounded-md bg-primary text-center text-white block w-[45%] mt-2 mb-0 mx-auto">
								Get 20% off
							</Link>
						</Section>
						<Container className="max-w-[90%] my-0 mx-auto p-5">
							<Text className="text-[1rem]">Dear {username},</Text>
							<Text className="text-[1rem]">{content}</Text>
							<Section className="my-10 mx-0 flex justify-around">
								<Link
									href="#"
									className="px-[0.7rem] py-[1rem] border-2 border-[#D13928]">
									View Sales
								</Link>
								<Link
									href="#"
									className="px-[0.7rem] py-[1rem] border-2 border-[#D13928]">
									View Store
								</Link>
							</Section>
							<Section
								style={{
									border: "2px dashed gray",
								}}
								className="flex justify-center py-4 px-[4.5%] w-[90.5%] rounded-md bg-slate-200">
								Use code <CodeInline>SPRING20</CodeInline> at checkout
							</Section>
							<Section>
								<Text className="text-xl font-bold">
									Popular Flower Bundles
								</Text>
								<Section>
									<Link href="#">
										<Row>
											<Column align="left">
												<Img
													src={`https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnR8ZW58MHx8MHx8fDA%3D`}
													width="145"
													height="120"
													alt="Karupu Plant"
													className="rounded-xl object-cover"
												/>
											</Column>
											<Column className="text-black py-0 px-3">
												<Text className="text-lg font-semibold">
													Karupu Plant
												</Text>
												<Text>
													This plant is a rare breed and grows up to 1-5 meters.
												</Text>
											</Column>
										</Row>
									</Link>
								</Section>
								<Hr style={{ margin: "1.5rem 0" }} />
								<Section className="w-[150px] my-0 mx-auto">
									<Row>
										<Column align="left">
											<Link href="#">
												<Img
													className="w-4 h-4"
													src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png"
												/>
											</Link>
										</Column>
										<Column align="center">
											<Img
												className="w-4 h-4"
												src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
											/>
										</Column>
										<Column align="right">
											<Img
												className="w-4 h-4"
												src="https://cdn-icons-png.flaticon.com/128/646/646094.png"
											/>
										</Column>
									</Row>
								</Section>
								<Section className="text-center w-auto my-4 mx-auto">
									<Link href="#">Unsubscribe</Link>
									<Text className="text-[1rem]">
										Want to hear from us again? <Link href="#">Click here</Link>
									</Text>
								</Section>
							</Section>
						</Container>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
