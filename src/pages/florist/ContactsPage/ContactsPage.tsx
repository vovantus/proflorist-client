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
import { X, Facebook, Instagram, Phone, WhatsApp } from "@mui/icons-material";

export default function ContactsPage() {
  const { floristInfo } = useGetFloristInfo();
  const { isLoading, info } = useGetStaticInfo(floristInfo.name, "contacts");
  console.log(isLoading, info);
  const contactItems = [
    {
      icon: <Phone />,
      label: "Phone",
      value: info?.contacts?.phone,
      link: "tel:+1-800-montefl",
    },
    {
      icon: <WhatsApp />,
      label: "WhatsApp",
      value: info?.contacts?.whatsapp,
      link: "https://wa.me/1800montefl",
    },
    {
      icon: <X />,
      label: "Twitter",
      value: info?.contacts?.twitter,
      link: "https://twitter.com/montefleur",
    },
    {
      icon: <Facebook />,
      label: "Facebook",
      value: info?.contacts?.facebook,
      link: "https://facebook.com/montefleur",
    },
    {
      icon: <Instagram />,
      label: "Instagram",
      value: info?.contacts?.instagram,
      link: "https://instagram.com/montefleur",
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
