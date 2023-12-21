import { useParams } from 'react-router-dom';

function ItemDetailsPage({ items }) {
  const { id } = useParams(); // Get the title from the URL parameter
  const selectedItem = items.find(item => item.id === id);

  if (!selectedItem) {
    return <div>Item not found</div>; // Handle case where item is not found
  }

  return (
    <div class="mx-auto test max-w-[50rem]  bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex pt-[8] justify-center">
        <img class="object-cover h-[30rem] w-[30rem] rounded-full" src={selectedItem.img} alt={selectedItem.title} />
      </div>
      <div class="p-12 slide-up">
        <h2 class="text-3xl text-center font-bold mb-2">{selectedItem.title}</h2>
        <p class="text-gray-600 text-center text-2xl mb-4">{selectedItem.author}</p>
        <p class="text-gray-700">{selectedItem.details}</p>
      </div>
    </div>
  );
}

export default ItemDetailsPage;
