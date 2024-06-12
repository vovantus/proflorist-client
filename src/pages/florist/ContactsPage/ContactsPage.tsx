import {
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
  Skeleton,
} from "@mui/material";
import useGetStaticInfo from "../../../hooks/useGetStaticInfo";
import { useGetFloristInfo } from "../../../hooks/useGetFloristInfo";
import X from "@mui/icons-material/X";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Phone from "@mui/icons-material/Phone";
import WhatsApp from "@mui/icons-material/WhatsApp";

export default function ContactsPage() {
  const { floristInfo } = useGetFloristInfo();
  const { isLoading, info } = useGetStaticInfo(floristInfo.name, "contacts");
  const contactItems = [
    {
      icon: <Phone />,
      label: "Phone",
      value: info?.contacts?.phone,
      link: "tel:" + info?.contacts?.phone,
    },
    {
      icon: <WhatsApp />,
      label: "WhatsApp",
      value: info?.contacts?.whatsapp,
      link: "https://wa.me/" + info?.contacts?.whatsapp,
    },
    {
      icon: <X />,
      label: "Twitter",
      value: info?.contacts?.twitter ? "@" + info?.contacts?.twitter : null,
      link: "https://twitter.com/" + info?.contacts?.twitter,
    },
    {
      icon: <Facebook />,
      label: "Facebook",
      value: info?.contacts?.facebook ? "@" + info?.contacts?.facebook : null,
      link: "https://facebook.com/" + info?.contacts?.facebook,
    },
    {
      icon: <Instagram />,
      label: "Instagram",
      value: info?.contacts?.instagram ? "@" + info?.contacts?.instagram : null,
      link: "https://instagram.com/" + info?.contacts?.instagram,
    },
  ];

  return (
    <Card sx={{ maxWidth: 345, margin: "auto", marginTop: 4, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Connect with Our Experienced Florists
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {isLoading ? (
            <>
              <Skeleton /> <Skeleton /> <Skeleton />{" "}
            </>
          ) : (
            info?.text
          )}
        </Typography>
        {isLoading ? (
          <>
            <Skeleton variant="rounded" height={60} sx={{ mt: 1 }} />
            <Skeleton variant="rounded" height={60} sx={{ mt: 1 }} />
            <Skeleton variant="rounded" height={60} sx={{ mt: 1 }} />
          </>
        ) : (
          <List>
            {contactItems
              .filter((el) => el.value)
              .map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  underline="none"
                  color="inherit"
                  target="_blank"
                >
                  <ListItem>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.value} secondary={item.label} />
                  </ListItem>
                </Link>
              ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
}
