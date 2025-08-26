import { Card, CardActionArea, Typography, Avatar, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

export type ArticleCardProps = {
  authorName: string;
  title: string;
  articleId: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  authorName,
  title,
  articleId,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        height: 120,
        width: 530,
      }}
    >
      <CardActionArea
        component={Link}
        href={`/article/${articleId}`}
        sx={{ height: "100%" }}
      >
        <Box p={2}>
          <Box display={"flex"} mb={1}>
            <Avatar sx={{ width: 24, height: 24 }}>
              <PersonIcon sx={{ fontSize: 20 }} />
            </Avatar>
            <Typography
              fontSize={14}
              ml={1}
              fontWeight={"bold"}
              color={"#444444"}
            >
              {authorName}
            </Typography>
          </Box>
          <Box>
            <Typography
              mt={1}
              fontSize={17}
              fontWeight={"bold"}
              color={"#444444"}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
