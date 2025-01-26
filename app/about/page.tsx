import { Button } from "@/ui-kit/Button/Button";
import { Metadata } from "next"

async function getAboutInfo() {
  const response = await fetch(`${process.env.DEV_URL}/api/about`, {
    next: {
      revalidate: 60
    }
  });

  if (!response.ok) throw new Error("Unable to fetch posts")

  const data = await response.json()

  return data;

  //запрос данных в серверной компоненте
}

interface IAboutItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const metadata: Metadata = {
  title: 'About',
}

export default async function About() {
  const about = await getAboutInfo();

  return (
    <>
      <h3>Select subitem</h3>
      <ul>
        {about.map((item: IAboutItem) => {
          return (
            <li key={item.id}>
              <Button
                variant="primary"
                text={item.title}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}
