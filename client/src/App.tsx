import { AppShell, Burger, Flex, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "./assets/tv.png";
import SideNavbar from "./Components/SideNavbar";
import RouterSwitcher from "./Components/RouterSwitcher";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Flex
            mih={50}
            gap="md"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Image radius="md" h={"3rem"} w={"3rem"} src={Logo} />
            <Text size="xl" c="teal.4" fw={700}>
              RWGL
            </Text>
          </Flex>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <SideNavbar toggleNavbar={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>
        <RouterSwitcher />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
