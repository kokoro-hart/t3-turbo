import { Metadata } from "next";
import { Button } from "@dir/ui";

import { Container } from "~/components/layouts";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <Container>
      <Button color="info" variant="outlined">
        ボタン
      </Button>
    </Container>
  );
}
