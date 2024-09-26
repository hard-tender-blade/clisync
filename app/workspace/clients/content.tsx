import { Client } from '@/modules/shared/types/mainTypes'
import React from 'react'
import List from './components/list'
import WorkSpaceSideBarWrapper from '../components/workSpaceSideBarWrapper'
import Pagination from './components/pagination'
import { Cursor } from '@/modules/shared/types/cursor'
import ToolBar from './components/toolBar'
import { Language } from '@/modules/client/languageInterface/language'
import PX from '@/app/components/px'
import Separator from '@/app/components/separator'
import PC from '@/app/components/pc'
import MOB from '@/app/components/mob'

export default function Content({
    clients,
    lang,
    nextCursor,
    prevCursor,
    allPages,
    currentPage,
}: {
    clients: Client[]
    lang: Language
    nextCursor: Cursor | null
    prevCursor: Cursor | null
    allPages: number
    currentPage: number
}) {
    return (
        <WorkSpaceSideBarWrapper currentPage="/workspace/clients">
            <PC>
                <Separator size="lg" />
            </PC>
            <MOB>
                <Separator size="sm" />
            </MOB>

            <PX className="flex w-full flex-col">
                <div className="flex w-full flex-col gap-2">
                    <ToolBar lang={lang} />
                    <List clients={clients} lang={lang} />
                    <Pagination
                        nextCursor={nextCursor}
                        prevCursor={prevCursor}
                        allPages={allPages}
                        currentPage={currentPage}
                    />
                </div>
            </PX>

            <MOB>
                <Separator size="sm" />
            </MOB>
        </WorkSpaceSideBarWrapper>
    )
}
