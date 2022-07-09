import Link from 'next/link';
import type { INote } from '../../../../libs/github/types';
import { getObsidianUri } from '../../../../libs/obsidian';
import {
  ActionsContainer,
  Action,
  ActionsTrigger,
} from './sidebar-actions.styles';

import { EditIcon, CodeIcon, KeyIcon } from '@iconicicons/react';
import { useState } from 'react';

export const SidebarActions = ({ note }: { note: INote }) => {
  const { github, path } = note;
  const obsidianUri = path && getObsidianUri(path);

  const [expanded, setExpanded] = useState(false);

  return path ? (
    <>
      {!expanded && (
        <ActionsTrigger onClick={() => setExpanded(!expanded)}>
          <Action>
            Tools
            <KeyIcon height={18} />
          </Action>
        </ActionsTrigger>
      )}

      <ActionsContainer expanded={expanded}>
        <Link href={obsidianUri}>
          <a target='_blank'>
            <Action>
              Edit
              <EditIcon height={18} />
            </Action>
          </a>
        </Link>
        <Link href={github}>
          <a target='_blank'>
            <Action>
              GitHub
              <CodeIcon height={18} />
            </Action>
          </a>
        </Link>
      </ActionsContainer>
    </>
  ) : (
    <></>
  );
};
