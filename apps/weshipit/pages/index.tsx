import {
  ClientsListHomepage,
  Button,
  Hero,
  Text,
  Hyperlink,
  CardHomepage,
} from '@weshipit/ui';
import Link from 'next/link';
import { getAllClients } from './api/client';
import { Layout } from '../components/layout';
import { linksApi } from './api/links';

interface ClientProps {
  id: string;
  data: {
    name: string;
    is_visible_homepage: boolean;
    logo: {
      url: string;
    };
    id: string;
  };
}

interface clientsPageProps {
  clients: ClientProps[];
}

export default function IndexPage({ clients }: clientsPageProps) {
  return (
    <Layout
      withContainer
      withFooter
      seoTitle="React Native Experts"
      seoDescription="At our React Native Development Agency, we specialize in creating high-quality, performant, and scalable mobile applications using the latest technologies and best practices. Our team of experienced developers can help you bring your idea to life and deliver a seamless user experience across all platforms. Contact us today to discuss your project and get a free quote."
      ogImageTitle="React Native Experts"
      withAccessoryRight={
        <div className="sm:flex sm:justify-center lg:justify-start">
          <Button
            as="a"
            variant="filled"
            href={linksApi.airtable.CONSULTATION_FORM}
            target="_blank"
          >
            Book a consultation
          </Button>
        </div>
      }
    >
      <Hero>
        <h1 className=" text-2xl font-extrabold tracking-tight text-gray-900 dark:text-slate-300 sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl">
          <span className="block leading-tight xl:inline">
            A tiny studio, making delightful React Native apps,
            <br />
            brought to you by
            <Hyperlink
              href="https://twitter.com/intent/follow?screen_name=flexbox_"
              className="items-center gap-1.5 rounded-full p-1 font-bold transition hover:bg-gray-50 dark:hover:bg-white/10 sm:px-2 md:top-1"
            >
              @flexbox
            </Hyperlink>
            &
            <Hyperlink
              href="https://twitter.com/intent/follow?screen_name=MatthysDev"
              className="items-center gap-1.5 rounded-full p-1 font-bold transition hover:bg-gray-50 dark:hover:bg-white/10 sm:px-2 md:top-1"
            >
              @MatthysDev
            </Hyperlink>
          </span>
        </h1>
        <CardHomepage />
      </Hero>
      <section className="m-auto max-w-7xl">
        <div className="mb-24 text-center ">
          <div className="flex justify-between">
            <Text as="h3" variant="p1" className="text-left">
              Trusted by top companies
            </Text>
            <Link legacyBehavior href="/clients">
              <a className="text-base font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900 dark:text-indigo-600 dark:hover:text-indigo-900">
                View our client list
              </a>
            </Link>
          </div>
          <ClientsListHomepage clients={clients} />
        </div>
      </section>
    </Layout>
  );
}

IndexPage.getInitialProps = async function () {
  const clients = await getAllClients();
  return clients;
};
