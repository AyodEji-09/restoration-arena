import { useState } from "react";
import { Dialog, DialogContent } from "../components/ui/dialog";

const PastEvent = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <main>
      <section className="med-cont pb-12">
        <h1 className="med-h">Event</h1>
        <p className="med-p mb-4">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda eos earum?
        </p>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <img
            src="/images/image 14.png"
            alt="1"
            className="med cursor-pointer"
            onClick={() => setSelected("/images/image 14.png")}
          />
          <img
            src="/images/cong.png"
            alt="2"
            className="med cursor-pointer"
            onClick={() => setSelected("/images/cong.png")}
          />
          <img
            src="/images/image 18.png"
            alt="3"
            className="med cursor-pointer"
            onClick={() => setSelected("/images/image 18.png")}
          />
          <img
            src="/images/image 13.png"
            alt="4"
            className="med cursor-pointer"
            onClick={() => setSelected("/images/image 13.png")}
          />
          <img
            src="/images/praise.png"
            alt="5"
            className="med cursor-pointer"
            onClick={() => setSelected("/images/praise.png")}
          />
          <img
            src="/images/P10444601.png"
            alt="6"
            className="med cursor-pointer"
            onClick={() => setSelected("/images/P10444601.png")}
          />
        </div>
      </section>
      {/* Lightbox / Modal */}
      <div className="fixed z-50">
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-6xl p-0 bg-transparent border-0 shadow-none">
            {selected && (
              <img
                src={selected}
                alt="Expanded"
                className="w-full rounded-xl mx-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default PastEvent;
