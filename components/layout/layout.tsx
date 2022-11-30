import { Box, Typography, Container, Link, useTheme } from "@mui/material";
import { Image } from "../image";
import nixSnowflake from "../../public/nix-snowflake.svg";
// import Link from "next/link";

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor:
          theme.palette.mode === "light"
            ? "rgb(242, 248, 253)"
            : "rgb(23, 17, 22)",
      }}
    >
      <header>
        <Box
          sx={{
            position: "fixed",
            top: "15rem",
            height: "100%",
            width: "100%",
            zIndex: 0,
            opacity: 0.1,
            backgroundImage: `url(${nixSnowflake.src})`,
            backgroundPositionX: "50%",
            backgroundRepeat: "no-repeat",
          }}
        />

        <Box
          sx={{
            p: 2,
            backgroundColor:
              theme.palette.mode === "light"
                ? "primary.main"
                : "background.paper",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              color: "#fff",
            }}
          >
            <Image
              src={nixSnowflake}
              alt="nix-logo"
              height={90}
              style={{
                marginBottom: "-1rem",
              }}
            />
            <Box sx={{ ml: 1 }} component="span">{`noog\u03BBe`}</Box>
          </Typography>
        </Box>
      </header>
      <main>
        <Container sx={{ pt: 0 }} maxWidth="xl">
          {children}
        </Container>
      </main>
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        Powered by{" "}
        <Link sx={{ ml: 1 }} href="https://oceansprint.org/">
          {" "}
          OceanSprint
        </Link>
      </footer>
    </Box>
  );
}