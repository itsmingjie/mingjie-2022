import type { GetStaticPropsContext } from 'next';
import { getNote, getPaths } from '../../libs/github';
import type { INote } from '../../libs/github/types';
import { LeftSidebarLayout } from '../../design-system/layouts/left-sidebar-layout';
import { Meta } from '../../design-system/utils/meta';
import { SidebarNavigation } from '../../design-system/components/sidebar-navigation';
import { useRouter } from 'next/router';
import { Content } from '../../components/content';
import { SidebarActions } from '../../components/pages/notes/sidebar-actions';

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const rawPath = params?.path as string[];
  const path = rawPath.join('/');

  const { note } = await getNote(path as string);

  return {
    props: {
      ...note,
    },
  };
};

export const getStaticPaths = async () => {
  const { success, paths } = await getPaths();

  if (success) {
    return {
      paths,
      fallback: 'blocking',
    };
  } else {
    console.error('[SSG ERROR] Failed to get paths');
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export default function Notes(note: INote) {
  const router = useRouter();
  const { content } = note;

  // if current route is /notes, isIndex should be true
  const SidebarNav =
    router.asPath === '/notes/' ||
    router.asPath === '/notes/Notes%20-%20Home/' ? (
      <SidebarNavigation text='Home' url='/'>
        <SidebarActions note={note} />
      </SidebarNavigation>
    ) : (
      <SidebarNavigation text='Notes' url='/notes/Notes%20-%20Home/'>
        <SidebarActions note={note} />
      </SidebarNavigation>
    );

  return (
    <LeftSidebarLayout sidebar={SidebarNav}>
      <Meta title='Notes Page' description='Showcasing my notes' />
      <Content content={content} />
    </LeftSidebarLayout>
  );
}
