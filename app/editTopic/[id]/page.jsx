import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  const apiUrl = process.env.API_URL;

  const res = await fetch(`${apiUrl}/api/topics/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch topic");
  }
  return res.json();
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return <EditTopicForm id={id} title={title} description={description} />;
}
