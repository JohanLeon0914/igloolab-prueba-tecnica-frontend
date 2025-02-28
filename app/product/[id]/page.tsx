import Container from "@/app/components/Container";
import SingleProduct from "@/app/components/SingleProduct";
import { getProduct } from "@/app/utils/Products";

type Params = Promise<{ id: string }>;
async function page(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;
  const product = await getProduct(id);

  return (
    <div className="bg-gray-100">
      <Container>
        <SingleProduct product={product!}/>
      </Container>
    </div>
  );
}

export default page;
