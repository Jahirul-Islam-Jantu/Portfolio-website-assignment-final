import {createFeedbackService, deleteFeedbackService, showFeedbackService} from "../services/FeedbackService.js";

export const CreateFeedbackController = async (req, res) => {
    let result = await createFeedbackService(req);
    res.json(result);
};

export const ShowFeedbackController =async (req, res) => {
    let result = await showFeedbackService(req)
    return res.json(result);
}

export const DeleteFeedbackController =async (req, res) => {
    let result = await deleteFeedbackService(req)
    return res.json(result);
}