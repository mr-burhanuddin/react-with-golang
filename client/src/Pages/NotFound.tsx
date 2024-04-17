import { Title, Text, Button, Container, Group, rem } from "@mantine/core";
import classes from "./Css-modules/NotFound.module.css";
import { useNavigate } from "react-router-dom";
import { IconHome2 } from "@tabler/icons-react";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately ! You may have mistyped the address, or the page has been
        moved to another URL.
      </Text>
      <Group justify="center">
        <Button variant="subtle" size="md" onClick={() => navigate("/")}>
          <IconHome2 style={{ width: rem(18), height: rem(18) }} /> &nbsp;&nbsp;
          Back Home
        </Button>
      </Group>
    </Container>
  );
}

export default NotFound;
