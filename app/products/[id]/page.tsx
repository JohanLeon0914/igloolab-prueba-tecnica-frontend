import UpdateProduct from "@/app/components/UpdateProduct";
import { getProduct } from "@/app/utils/Products";

type Params = Promise<{ id: string }>;
async function page(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;
  const product = await getProduct(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Actualizar Producto
      </h1>
      <UpdateProduct product={product}/>
    </div>
  );
}

export default page;
