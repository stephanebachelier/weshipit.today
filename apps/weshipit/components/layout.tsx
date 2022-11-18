import { Header } from '@weshipit/ui';
import NextHead from './next-head';

interface LayoutProps {
  children: React.ReactNode;
  withHeader?: boolean;
  withContainer?: boolean;
  withAccessoryRight?: React.ReactNode;
  ogTitle?: string;
}

export function Layout({
  children,
  withHeader = false,
  withContainer = false,
  withAccessoryRight,
  ogTitle,
}: LayoutProps) {
  return (
    <>
      <NextHead ogTitle={ogTitle} />
      <div className="h-full bg-gray-100">
        {withHeader && <Header />}
        {withAccessoryRight && (
          <Header withAccessoryRight accessoryRight={withAccessoryRight} />
        )}
        {withContainer ? (
          <div className="mx-auto max-w-6xl">{children}</div>
        ) : (
          children
        )}
      </div>
    </>
  );
}

export default Layout;
