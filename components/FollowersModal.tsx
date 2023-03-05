import { Dialog, Tab } from "@headlessui/react";
import FollowersContainer from "./FollowersContainer";
import FollowingContainer from "./FollowingContainer";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  isOpenFollowerlist: any;
  setIsOpenFollowerlist: any;
  myFollowing: any;
  myFollowers: any;
};

const FollowersModal = ({
  isOpenFollowerlist,
  setIsOpenFollowerlist,
  myFollowing,
  myFollowers,
}: Props) => {
  return (
    <Dialog
      open={isOpenFollowerlist}
      onClose={() => setIsOpenFollowerlist(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-[25rem] rounded bg-white py-6 px-4">
          {/* <Dialog.Title className="mb-7 font-bold text-[#303933]">
            Followers
          </Dialog.Title> */}

          <Tab.Group manual>
            <Tab.List className="mb-3 flex border-b border-black/30">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full  py-2.5 text-sm font-medium leading-5 text-[#303933]",
                    selected ? "border-b-4 border-[#303933]" : "border-none"
                  )
                }
              >
                Followers
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full  py-2.5 text-sm font-medium leading-5 text-[#303933]",
                    selected ? "border-b-4 border-[#303933]" : "border-none"
                  )
                }
              >
                Following
              </Tab>
            </Tab.List>
            <Tab.Panels className={classNames("rounded-xl bg-white p-3")}>
              <Tab.Panel className="">
                <FollowersContainer myFollowers={myFollowers} />
              </Tab.Panel>
              <Tab.Panel className="">
                <FollowingContainer myFollowing={myFollowing} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default FollowersModal;
