import { DocMeta, FilePosition } from "@/models/data";
import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import EditIcon from "@mui/icons-material/Edit";

const getSourcePosition = (baseUrl: string, position: FilePosition): string => {
  const filename = position?.file.split("/").slice(4).join("/");
  const line = position?.line;
  const column = position?.column;
  let res = `${baseUrl}`;
  if (filename && line && column) {
    res += `/${filename}#L${line}:C${column}`;
  }
  return res;
};

export const PositionLink = ({ meta }: { meta: DocMeta }) => {
  const { attr_position, lambda_position, count_applied, content_meta } = meta;

  const contentPosition = content_meta?.position;
  const position = attr_position || lambda_position;

  const is_inherited =
    JSON.stringify(content_meta?.path) !== JSON.stringify(meta.path);
  return (
    <div data-pagefind-ignore="all">
      {!position && (
        <Typography variant="subtitle1" sx={{ color: "text.secondary", pb: 2 }}>
          This function is not declared in a .nix file
        </Typography>
      )}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
          {contentPosition && (
            <Link
              target="_blank"
              href={getSourcePosition(
                "https://github.com/hsjobeki/nixpkgs/tree/migrate-doc-comments",
                contentPosition
              )}
            >
              <Button
                variant="text"
                sx={{ textTransform: "none", my: 1, placeSelf: "start" }}
                startIcon={<EditIcon />}
              >
                Edit source
              </Button>
            </Link>
          )}
          {!contentPosition && position && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link
                target="_blank"
                href={getSourcePosition(
                  "https://github.com/hsjobeki/nixpkgs/tree/migrate-doc-comments",
                  position
                )}
              >
                <Button
                  data-pagefind-ignore="all"
                  variant="text"
                  sx={{
                    textTransform: "none",
                    my: 1,
                    placeSelf: "start",
                  }}
                  startIcon={<LinkIcon />}
                >
                  Underlying function
                </Button>
              </Link>
              {count_applied && count_applied > 0 && (
                <Typography
                  variant="subtitle2"
                  sx={{ color: "text.secondary" }}
                >
                  {`Applied ${count_applied} times`}
                </Typography>
              )}
            </Box>
          )}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
          {contentPosition &&
            is_inherited &&
            `(${content_meta?.path?.join(".")})`}
        </Typography>
      </Box>
      {!contentPosition && (
        <>
          <Typography variant="h5" sx={{ pt: 2 }}>
            {"Contribute"}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ py: 2 }}>
            <Box>
              Sometimes documentation is missing or tooling support from noogle
              is missing.
            </Box>
            <List sx={{ width: "100%" }}>
              <ListItem>
                <Link href="/tutorials/documentation" target="_blank">
                  <ListItemButton>
                    <ListItemText
                      primary="Write API documentation for this function"
                      secondary="Learn how to write documentation"
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem>
                {/* <Link href={"/tutorials/noogle"} target="_blank"> */}
                {/* <ListItemButton> */}
                <ListItemText
                  primary="Improve position tracking"
                  secondary="Contribute to Noogle"
                />
                {/* </ListItemButton> */}
                {/* </Link> */}
              </ListItem>
            </List>
          </Typography>
        </>
      )}
    </div>
  );
};
